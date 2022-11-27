import app from "./app";
import { variables } from "@config/envs";

app.listen(variables.applicationPort, () => {
  console.log(`Server is running on port ${variables.applicationPort}`);
});
