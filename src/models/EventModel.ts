import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    id: String,
    name: String,
    url: String,
    actionType: String,
    username: String
});

interface IEvent extends Document {
    id: string;
    name: string;
    url: string;
    actionType: string;
    username: string;
}

export default model<IEvent>("Event", schema);