export class ParsingService {

    parseMobiError(e) {
        return e.response ? e.response :
            { status: 500, data: process.env.NODE_ENV === 'development' ? e.stack || e : 'Server Error' };
    }
}