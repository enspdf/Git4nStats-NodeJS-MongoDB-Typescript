import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    id: String,
    url: String,
    description: String,
    username: String
});

interface IGist extends Document {
    id: string;
    url: string;
    description: string;
    username: string;
}

export default model<IGist>("Gist", schema);