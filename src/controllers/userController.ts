import { Request, Response } from "express";
import { processUser } from "../service/userService";

/**
 * Controller Used to get the github user information related to n users requested
 * 
 * @param req 
 * @param res 
 */
export async function getUsersData(req: Request, res: Response): Promise<Response> {
    const { usernames } = req?.body;

    /**
     * Check if some users were send on the request to process it
     */
    if (usernames?.length) {
        let processResponse = await processUser(usernames);

        return res.status(200).json({
            processResponse,
            status: 200
        });
    } else {
        return res.status(422).json({
            message: "The usernames are required to search gist and events",
            status: 422
        });
    }
};