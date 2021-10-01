const { buildQuery } = require('../libsData/buildQuery');

const getRut = (mail) => {

    let response = null
    try {
        return buildQuery(`SELECT SPRIDEN_ID FROM GOREMAL INNER JOIN SPRIDEN ON SPRIDEN_PIDM = GOREMAL_PIDM
        WHERE LOWER(GOREMAL_EMAIL_ADDRESS) = LOWER('${mail}') 
        AND GOREMAL_EMAL_CODE = 'CUSS' 
        AND GOREMAL_STATUS_IND = 'A'
        ORDER BY SPRIDEN_ACTIVITY_DATE DESC`)

    } catch (error) {
        console.log(error)
        return response

    }
} 

module.exports = { getRut };