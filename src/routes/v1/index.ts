import { upload } from '@middelwares/multer.middleware';
import express, { Request, Response } from 'express';
import response from '@helpers/response.helper';

const router = express.Router({ mergeParams: true });


router.post("/upload", upload.single('fileTest'), (req:Request,res:Response)=>{
    console.log(req.file)
    response.success(req, res);
});

export default router;