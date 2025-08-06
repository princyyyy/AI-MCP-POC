# Get User Details via Reqres API - Manual Test Cases

## TC001: Retrieve Valid User Details by ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible and user ID 2 exists in the system  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/2
4. Send the request

**Expected Result:**  
- Status code 200 OK is returned
- Response body contains user details in JSON format with fields: id, email, first_name, last_name, avatar
- Response time is under 2 seconds
- User data for ID 2 is displayed correctly

**Postcondition:**  
Valid user data is retrieved successfully

**Priority:** High  
**Tags:** api, get-request, positive-test, valid-data, performance

---

## TC002: Retrieve User Details with Non-Existent ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/999
4. Send the request

**Expected Result:**  
- Status code 404 Not Found is returned
- Response indicates that the user was not found
- Response time is under 2 seconds

**Postcondition:**  
Appropriate error response is returned for non-existent user

**Priority:** High  
**Tags:** api, get-request, negative-test, 404-error, error-handling

---

## TC003: Retrieve User Details with Zero ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/0
4. Send the request

**Expected Result:**  
- Proper error response is returned (404 Not Found or 400 Bad Request)
- Response time is under 2 seconds
- Error message indicates invalid user ID

**Postcondition:**  
API handles zero ID gracefully with appropriate error response

**Priority:** Medium  
**Tags:** api, get-request, edge-case, invalid-id, error-handling

---

## TC004: Retrieve User Details with Negative ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/-1
4. Send the request

**Expected Result:**  
- Proper error response is returned (404 Not Found or 400 Bad Request)
- Response time is under 2 seconds
- Error message indicates invalid user ID

**Postcondition:**  
API handles negative ID gracefully with appropriate error response

**Priority:** Medium  
**Tags:** api, get-request, edge-case, negative-id, error-handling

---

## TC005: Retrieve User Details with Very Large ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/1000000000
4. Send the request

**Expected Result:**  
- Proper error response is returned (404 Not Found or 400 Bad Request)
- Response time is under 2 seconds
- API handles large numbers gracefully

**Postcondition:**  
API handles very large ID values appropriately

**Priority:** Medium  
**Tags:** api, get-request, edge-case, large-number, error-handling

---

## TC006: Retrieve User Details with Non-Numeric ID
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/abc
4. Send the request

**Expected Result:**  
- API handles invalid input format gracefully
- Proper error response is returned (400 Bad Request or 404 Not Found)
- Response time is under 2 seconds

**Postcondition:**  
API validates input format and returns appropriate error

**Priority:** Medium  
**Tags:** api, get-request, invalid-format, string-input, error-handling

---

## TC007: Verify Response Structure for Valid User
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible and user ID 2 exists  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/2
4. Send the request
5. Examine the response structure

**Expected Result:**  
- Status code 200 OK is returned
- Response contains all required fields: id, email, first_name, last_name, avatar
- Data types are correct (id as number, others as strings)
- No extra or missing fields in the response structure

**Postcondition:**  
Response structure matches API specification

**Priority:** High  
**Tags:** api, get-request, response-structure, data-validation, schema-validation

---

## TC008: Verify Response Time Performance
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible and stable internet connection  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/2
4. Send the request multiple times (at least 5 iterations)
5. Record response times for each request

**Expected Result:**  
- All requests return responses within 2 seconds
- Response times are consistent across multiple requests
- No significant performance degradation

**Postcondition:**  
API meets performance requirements consistently

**Priority:** Medium  
**Tags:** api, get-request, performance-test, response-time, load-testing

---

## TC009: Verify No Authentication Required
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/2
4. Send the request without any authentication headers or tokens

**Expected Result:**  
- Status code 200 OK is returned
- User details are retrieved successfully
- No authentication errors occur
- Request completes without requiring credentials

**Postcondition:**  
API access works without authentication as specified

**Priority:** Medium  
**Tags:** api, get-request, authentication, public-api, security

---

## TC010: Verify JSON Response Format
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible and user ID 2 exists  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Enter the endpoint URL: https://reqres.in/api/users/2
4. Send the request
5. Verify the Content-Type header and response format

**Expected Result:**  
- Content-Type header is "application/json"
- Response body is valid JSON format
- JSON structure is properly formatted and parseable
- All field values are appropriate data types

**Postcondition:**  
Response format meets JSON standards

**Priority:** Medium  
**Tags:** api, get-request, json-format, content-type, data-format

---

## TC011: Test API with Different Valid User IDs
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible and multiple users exist  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Set the request method to GET
3. Test with multiple valid user IDs (1, 2, 3, 4, 5, 6)
4. Send requests for each ID
5. Compare response structures and data

**Expected Result:**  
- All valid IDs return status code 200 OK
- Each response contains user-specific data
- Response structure remains consistent across different users
- All required fields are present for each user

**Postcondition:**  
API works consistently across different valid user IDs

**Priority:** Medium  
**Tags:** api, get-request, multiple-users, data-consistency, positive-test

---

## TC012: Verify API Endpoint URL Structure
**Related Feature:** Get User Details via Reqres API  
**Precondition:** API endpoint is accessible  

**Test Steps:**
1. Open API testing tool (Postman, curl, or similar)
2. Verify the endpoint URL structure: https://reqres.in/api/users/{id}
3. Test with various ID formats in the URL path
4. Ensure the endpoint follows RESTful conventions

**Expected Result:**  
- URL structure follows the specified pattern
- ID parameter is correctly captured from the URL path
- RESTful conventions are followed
- API responds appropriately to URL variations

**Postcondition:**  
API endpoint structure is validated and confirmed

**Priority:** Low  
**Tags:** api, url-structure, restful, endpoint-validation, architecture

---
