const { ERROR:httpError } = require('../httpstatus/status_code');

/**
 *  wrapper for success response
 */
const data =(data) => ({err:null, data});

const paginationData = (data, page, limit, totalData) => ({err:null, data, page, limit, totalData});
/**
 * wrapper for error response
 */
const error = (err) => ({err, data:null});

// response code for success and error response like 200, 400, 500, etc and data for response data
const response = (res, result, message = '', responseCode = 200) => {
    let status = true;
    let data = result.data || '';
    if (result.type === 'fail') {
        const errCode = checkErrorCode(result.err);
        status = false;
        data = result.err && result.err.data ? result.err.data : '';
        message = result.err && result.err.message ? result.err.message : message;
        responseCode = result.err && result.err.code ? result.err.code : errCode;
    }
    res.status(responseCode).send({ success: status, data, message, code: responseCode });
};


const paginationResponse = (res, type, result, message = 'Success', code = 200) => {
    let status = true;
    let data = result.data;
    if (type === 'fail') {
        const errCode = checkErrorCode(result.err);
        status = false;
        data = result.err && result.err.data ? result.err.data : '';
        message = result.err && result.err.message ? result.err.message : message;
        code = result.err && result.err.code ? result.err.code : errCode;
        responseCode = errCode;
    } else {
        res.status(code).send({ success: status, data, message, code, page: result.page, limit: result.limit, totalData: result.totalData });
    }
};

const checkErrorCode = (err) => {
    if(err === null || err === undefined) return 500;
    return httpError[err] || 500;
};

module.exports = {
    data,
    error,
    response,
    paginationData,
    paginationResponse
};