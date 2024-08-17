import DataURIParser from 'datauri/parser.js';
import path from 'path';

const parser = new DataURIParser();

const getDataUri = (file) => {
    // if (!file) throw new Error("File is required");
    
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;
