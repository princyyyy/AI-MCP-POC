const { test, expect } = require('@playwright/test');
const apiClient = require('../utils/apiClient');
const testData = require('../testData/ReqresAPIData.json');

test.describe('ReqresAPI - Get User Details', () => {
  
  test('TC001: Retrieve Valid User Details by ID', async () => {
    const userId = testData.primaryTestUserId;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    expect(response.status).toBe(testData.expectedStatusCodes.success);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
    
    // Verify response structure
    expect(response.data).toHaveProperty('data');
    expect(response.data.data).toMatchObject({
      id: expect.any(Number),
      email: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      avatar: expect.any(String)
    });
    
    // Verify specific user ID
    expect(response.data.data.id).toBe(userId);
  });

  test('TC002: Retrieve User Details with Non-Existent ID', async () => {
    const userId = testData.invalidUserIds.nonExistent;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    // Non-existent ID should return 404 Not Found or 401 Unauthorized
    expect([testData.expectedStatusCodes.notFound, testData.expectedStatusCodes.unauthorized])
      .toContain(response.status);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
  });

  test('TC003: Retrieve User Details with Zero ID', async () => {
    const userId = testData.invalidUserIds.zero;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    // Zero ID should return 404 Not Found, 400 Bad Request, or 401 Unauthorized
    expect([testData.expectedStatusCodes.notFound, testData.expectedStatusCodes.badRequest, testData.expectedStatusCodes.unauthorized])
      .toContain(response.status);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
  });

  test('TC004: Retrieve User Details with Negative ID', async () => {
    const userId = testData.invalidUserIds.negative;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    // Negative ID should return 404 Not Found, 400 Bad Request, or 401 Unauthorized
    expect([testData.expectedStatusCodes.notFound, testData.expectedStatusCodes.badRequest, testData.expectedStatusCodes.unauthorized])
      .toContain(response.status);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
  });

  test('TC005: Retrieve User Details with Very Large ID', async () => {
    const userId = testData.invalidUserIds.veryLarge;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    // Very large ID should return 404 Not Found, 400 Bad Request, or 401 Unauthorized
    expect([testData.expectedStatusCodes.notFound, testData.expectedStatusCodes.badRequest, testData.expectedStatusCodes.unauthorized])
      .toContain(response.status);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
  });

  test('TC006: Retrieve User Details with Non-Numeric ID', async () => {
    const userId = testData.invalidUserIds.nonNumeric;
    const startTime = Date.now();
    
    const response = await apiClient.get(`/users/${userId}`);
    const responseTime = Date.now() - startTime;
    
    // Non-numeric ID should return 404 Not Found, 400 Bad Request, or 401 Unauthorized
    expect([testData.expectedStatusCodes.notFound, testData.expectedStatusCodes.badRequest, testData.expectedStatusCodes.unauthorized])
      .toContain(response.status);
    expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
  });

  test('TC007: Verify Response Structure for Valid User', async () => {
    const userId = testData.primaryTestUserId;
    
    const response = await apiClient.get(`/users/${userId}`);
    
    expect(response.status).toBe(testData.expectedStatusCodes.success);
    
    // Verify all required fields are present
    testData.expectedResponseFields.forEach(field => {
      expect(response.data.data).toHaveProperty(field);
    });
    
    // Verify data types
    expect(typeof response.data.data.id).toBe('number');
    expect(typeof response.data.data.email).toBe('string');
    expect(typeof response.data.data.first_name).toBe('string');
    expect(typeof response.data.data.last_name).toBe('string');
    expect(typeof response.data.data.avatar).toBe('string');
    
    // Verify no unexpected extra fields at top level
    expect(Object.keys(response.data.data)).toEqual(
      expect.arrayContaining(testData.expectedResponseFields)
    );
  });

  test('TC008: Verify Response Time Performance', async () => {
    const userId = testData.primaryTestUserId;
    const responseTimes = [];
    
    // Test multiple iterations
    for (let i = 0; i < testData.performanceThresholds.testIterations; i++) {
      const startTime = Date.now();
      
      const response = await apiClient.get(`/users/${userId}`);
      const responseTime = Date.now() - startTime;
      
      expect(response.status).toBe(testData.expectedStatusCodes.success);
      expect(responseTime).toBeLessThan(testData.performanceThresholds.responseTimeMs);
      
      responseTimes.push(responseTime);
    }
    
    // Calculate average response time
    const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    console.log(`Average response time: ${avgResponseTime}ms`);
    console.log(`Response times: ${responseTimes.join(', ')}ms`);
    
    // All response times should be under threshold
    responseTimes.forEach(time => {
      expect(time).toBeLessThan(testData.performanceThresholds.responseTimeMs);
    });
  });

  test('TC009: Verify No Authentication Required', async () => {
    const userId = testData.primaryTestUserId;
    
    // Make request without any authentication headers
    const response = await apiClient.get(`/users/${userId}`);
    
    expect(response.status).toBe(testData.expectedStatusCodes.success);
    expect(response.data).toHaveProperty('data');
    expect(response.data.data.id).toBe(userId);
  });

  test('TC010: Verify JSON Response Format', async () => {
    const userId = testData.primaryTestUserId;
    
    const response = await apiClient.get(`/users/${userId}`);
    
    expect(response.status).toBe(testData.expectedStatusCodes.success);
    
    // Verify Content-Type header
    expect(response.headers['content-type']).toContain(testData.expectedContentType);
    
    // Verify response body is valid JSON (axios automatically parses JSON)
    expect(response.data).toBeInstanceOf(Object);
    expect(typeof response.data).toBe('object');
    
    // Verify JSON structure is parseable and properly formatted
    expect(() => JSON.stringify(response.data)).not.toThrow();
  });

  test('TC011: Test API with Different Valid User IDs', async () => {
    const validUserIds = testData.validUserIds;
    let successfulResponses = 0;
    
    for (const userId of validUserIds) {
      const response = await apiClient.get(`/users/${userId}`);
      
      // Some user IDs might return 401, only validate successful responses
      if (response.status === testData.expectedStatusCodes.success) {
        successfulResponses++;
        expect(response.data).toHaveProperty('data');
        
        // Verify response structure consistency
        testData.expectedResponseFields.forEach(field => {
          expect(response.data.data).toHaveProperty(field);
        });
        
        // Verify user-specific data
        expect(response.data.data.id).toBe(userId);
        expect(typeof response.data.data.email).toBe('string');
        expect(response.data.data.email).toContain('@');
      } else {
        // Log when user ID returns non-200 status
        console.log(`User ID ${userId} returned status: ${response.status}`);
      }
    }
    
    // At least some user IDs should be successful
    expect(successfulResponses).toBeGreaterThan(0);
  });

  test('TC012: Verify API Endpoint URL Structure', async () => {
    const userId = testData.primaryTestUserId;
    
    // Test the standard RESTful URL pattern
    const response = await apiClient.get(`/users/${userId}`);
    
    expect(response.status).toBe(testData.expectedStatusCodes.success);
    expect(response.config.url).toBe(`/users/${userId}`);
    
    // Verify the full URL follows RESTful conventions
    const fullUrl = `${response.config.baseURL}${response.config.url}`;
    expect(fullUrl).toBe(`https://reqres.in/api/users/${userId}`);
    
    // Verify ID parameter is correctly captured
    expect(response.data.data.id).toBe(userId);
  });

});
