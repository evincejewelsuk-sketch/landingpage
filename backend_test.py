import requests
import sys
from datetime import datetime
import json

class EvinceJewelsAPITester:
    def __init__(self, base_url="https://gemstone-craft.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"   ✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   📄 Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   📄 Response: {response.text[:100]}...")
            else:
                print(f"   ❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   📄 Response: {response.text[:200]}...")

            self.results.append({
                "test": name,
                "success": success,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "url": url,
                "method": method
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"   ❌ Failed - Error: {str(e)}")
            self.results.append({
                "test": name,
                "success": False,
                "error": str(e),
                "url": url,
                "method": method
            })
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_status_endpoint_create(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_status_endpoint_get(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

    def test_lead_form_submission(self):
        """Test lead form submission"""
        test_data = {
            "name": "John Doe Testing",
            "email": "test@example.com",
            "phone": "+44 1234 567890",
            "interest": "Gold Jewellery",
            "message": "This is a test submission from automated testing"
        }
        return self.run_test(
            "Lead Form Submission",
            "POST",
            "api/lead",
            200,
            data=test_data
        )

    def test_lead_form_validation(self):
        """Test lead form validation with missing fields"""
        test_data = {
            "name": "Test User",
            # Missing email and phone
            "message": "Test message"
        }
        return self.run_test(
            "Lead Form Validation (Missing Fields)",
            "POST",
            "api/lead",
            422,  # Expecting validation error
            data=test_data
        )

def main():
    print("🚀 Starting Evince Jewels API Testing...")
    print("=" * 60)
    
    tester = EvinceJewelsAPITester()
    
    # Run all tests
    print("\n🔧 Testing Core API Endpoints:")
    tester.test_root_endpoint()
    
    print("\n📊 Testing Status Endpoints:")
    tester.test_status_endpoint_create()
    tester.test_status_endpoint_get()
    
    print("\n📝 Testing Lead Form Endpoints:")
    tester.test_lead_form_submission()
    tester.test_lead_form_validation()
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 FINAL RESULTS: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return_code = 0
    else:
        print("❌ Some tests failed!")
        print("\nFailed tests:")
        for result in tester.results:
            if not result['success']:
                error_msg = result.get('error', f'Status {result.get("actual_status")}')
                print(f"   - {result['test']}: {error_msg}")
        return_code = 1
    
    return return_code

if __name__ == "__main__":
    sys.exit(main())