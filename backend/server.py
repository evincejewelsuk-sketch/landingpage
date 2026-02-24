from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'evincejewelsuk@gmail.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class LeadFormRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str = ""
    interest: str = ""

class LeadFormResponse(BaseModel):
    status: str
    message: str
    lead_id: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Evince Jewels API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/lead", response_model=LeadFormResponse)
async def submit_lead_form(request: LeadFormRequest):
    """Submit a lead form and send email notification"""
    lead_id = str(uuid.uuid4())
    
    # Store lead in database
    lead_doc = {
        "lead_id": lead_id,
        "name": request.name,
        "email": request.email,
        "phone": request.phone,
        "message": request.message,
        "interest": request.interest,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    await db.leads.insert_one(lead_doc)
    
    # Prepare email HTML
    html_content = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #FFFFF0;">
        <h1 style="color: #0B6E4F; font-size: 24px; margin-bottom: 30px; border-bottom: 2px solid #D4AF37; padding-bottom: 15px;">
            New Lead from Evince Jewels Website
        </h1>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; width: 120px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1A1A1A; font-weight: 500;">{request.name}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1A1A1A;">
                    <a href="mailto:{request.email}" style="color: #0B6E4F;">{request.email}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1A1A1A;">
                    <a href="tel:{request.phone}" style="color: #0B6E4F;">{request.phone}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666;">Interest:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #1A1A1A;">{request.interest or 'Not specified'}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; color: #666; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #1A1A1A;">{request.message or 'No message provided'}</td>
            </tr>
        </table>
        
        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #D4AF37; color: #666; font-size: 12px;">
            Lead ID: {lead_id}<br>
            Submitted: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}
        </p>
    </div>
    """
    
    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "subject": f"New Lead: {request.name} - Evince Jewels",
        "html": html_content
    }
    
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent successfully for lead {lead_id}")
        return LeadFormResponse(
            status="success",
            message="Thank you for your inquiry. We will contact you shortly.",
            lead_id=lead_id
        )
    except Exception as e:
        logger.error(f"Failed to send email for lead {lead_id}: {str(e)}")
        # Still return success since lead was saved
        return LeadFormResponse(
            status="success",
            message="Thank you for your inquiry. We will contact you shortly.",
            lead_id=lead_id
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
