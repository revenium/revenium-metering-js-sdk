/*
 * Revenium Metering API
 * Revenium Metering API
 *
 * OpenAPI spec version: 1.14.0-SNAPSHOT
 * Contact: info@revenium.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient.js";
import MeteringRequestDTO from '../model/MeteringRequestDTO.js';
import Unit from '../model/Unit.js';

/**
* Metering service.
* @module api/MeteringApi
* @version 1.14.0-SNAPSHOT
*/
export default class MeteringApi{

    /**
    * Constructs a new MeteringApi. 
    * @alias module:api/MeteringApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the meter operation.
     * @callback moduleapi/MeteringApi~meterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Unit{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert API metering data
     * Insert API metering data
     * @param {module:model/MeteringRequestDTO} body 
     * @param {module:api/MeteringApi~meterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    meter(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling meter");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = Unit;

      return this.apiClient.callApi(
        '/meter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the valid operation.
     * @callback moduleapi/MeteringApi~validCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Determine if a ProductKey is valid or not
     * Determine if a ProductKey is valid or not
     * @param {Object} opts Optional parameters
     * @param {String} opts.productKey The product key
     * @param {String} opts.application The application ID
     * @param {module:api/MeteringApi~validCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    valid(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'productKey': opts['productKey'],'application': opts['application']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/meter/product-key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
