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
import ApiClient from '../ApiClient.js';

/**
 * The ApiEventDTO model module.
 * @module model/ApiEventDTO
 * @version 1.14.0-SNAPSHOT
 */
export default class ApiEventDTO {
  /**
   * Constructs a new <code>ApiEventDTO</code>.
   * @alias module:model/ApiEventDTO
   * @class
   * @param responseCode {Number} 
   */
  constructor(responseCode) {
    this.responseCode = responseCode;
  }

  /**
   * Constructs a <code>ApiEventDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiEventDTO} obj Optional instance to populate.
   * @return {module:model/ApiEventDTO} The populated <code>ApiEventDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiEventDTO();
      if (data.hasOwnProperty('requestId'))
        obj.requestId = ApiClient.convertToType(data['requestId'], 'String');
      if (data.hasOwnProperty('eventType'))
        obj.eventType = ApiClient.convertToType(data['eventType'], 'String');
      if (data.hasOwnProperty('assetId'))
        obj.assetId = ApiClient.convertToType(data['assetId'], 'String');
      if (data.hasOwnProperty('productKey'))
        obj.productKey = ApiClient.convertToType(data['productKey'], 'String');
      if (data.hasOwnProperty('application'))
        obj.application = ApiClient.convertToType(data['application'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('currentMillis'))
        obj.currentMillis = ApiClient.convertToType(data['currentMillis'], 'Number');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
      if (data.hasOwnProperty('elapsedTime'))
        obj.elapsedTime = ApiClient.convertToType(data['elapsedTime'], 'Number');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], 'String');
      if (data.hasOwnProperty('responseCode'))
        obj.responseCode = ApiClient.convertToType(data['responseCode'], 'Number');
      if (data.hasOwnProperty('requestMessageSize'))
        obj.requestMessageSize = ApiClient.convertToType(data['requestMessageSize'], 'Number');
      if (data.hasOwnProperty('responseMessageSize'))
        obj.responseMessageSize = ApiClient.convertToType(data['responseMessageSize'], 'Number');
      if (data.hasOwnProperty('contentType'))
        obj.contentType = ApiClient.convertToType(data['contentType'], 'String');
      if (data.hasOwnProperty('remoteHost'))
        obj.remoteHost = ApiClient.convertToType(data['remoteHost'], 'String');
      if (data.hasOwnProperty('userAgent'))
        obj.userAgent = ApiClient.convertToType(data['userAgent'], 'String');
      if (data.hasOwnProperty('correlationId'))
        obj.correlationId = ApiClient.convertToType(data['correlationId'], 'String');
      if (data.hasOwnProperty('backendLatency'))
        obj.backendLatency = ApiClient.convertToType(data['backendLatency'], 'Number');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} requestId
 */
ApiEventDTO.prototype.requestId = undefined;

/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */
ApiEventDTO.EventTypeEnum = {
  /**
   * value: "REQUEST"
   * @const
   */
  REQUEST: "REQUEST",

  /**
   * value: "RESPONSE"
   * @const
   */
  RESPONSE: "RESPONSE"
};
/**
 * @member {module:model/ApiEventDTO.EventTypeEnum} eventType
 */
ApiEventDTO.prototype.eventType = undefined;

/**
 * @member {String} assetId
 */
ApiEventDTO.prototype.assetId = undefined;

/**
 * @member {String} productKey
 */
ApiEventDTO.prototype.productKey = undefined;

/**
 * @member {String} application
 */
ApiEventDTO.prototype.application = undefined;

/**
 * @member {String} method
 */
ApiEventDTO.prototype.method = undefined;

/**
 * @member {Number} currentMillis
 */
ApiEventDTO.prototype.currentMillis = undefined;

/**
 * @member {String} uri
 */
ApiEventDTO.prototype.uri = undefined;

/**
 * @member {Number} elapsedTime
 */
ApiEventDTO.prototype.elapsedTime = undefined;

/**
 * @member {String} metadata
 */
ApiEventDTO.prototype.metadata = undefined;

/**
 * @member {Number} responseCode
 */
ApiEventDTO.prototype.responseCode = undefined;

/**
 * @member {Number} requestMessageSize
 */
ApiEventDTO.prototype.requestMessageSize = undefined;

/**
 * @member {Number} responseMessageSize
 */
ApiEventDTO.prototype.responseMessageSize = undefined;

/**
 * @member {String} contentType
 */
ApiEventDTO.prototype.contentType = undefined;

/**
 * @member {String} remoteHost
 */
ApiEventDTO.prototype.remoteHost = undefined;

/**
 * @member {String} userAgent
 */
ApiEventDTO.prototype.userAgent = undefined;

/**
 * @member {String} correlationId
 */
ApiEventDTO.prototype.correlationId = undefined;

/**
 * @member {Number} backendLatency
 */
ApiEventDTO.prototype.backendLatency = undefined;

/**
 * @member {String} clientId
 */
ApiEventDTO.prototype.clientId = undefined;

/**
 * @member {String} source
 */
ApiEventDTO.prototype.source = undefined;

