import app from "./app";
import { startConnection } from "./utils/database";

async function main() {
    await startConnection();
    const PORT = app.get("port");
    await app.listen(PORT);

    console.log(`Server running on http://localhost:${PORT}`);
};

main();