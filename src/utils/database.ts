import { connect } from "mongoose";

export async function startConnection() {
    // Remote Connection
    await connect("mongodb://git4nstats:git4nstats@ds017256.mlab.com:17256/git4nstats", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });

    // Local Connection
    /*await connect("mongodb://localhost/git4nstats", {
        useNewUrlParser: true,
        useFindAndModify: true
    });*/

    console.log("Database Connected");
};