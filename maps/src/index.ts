import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
// console.log("🚀 ~ file: index.ts ~ line 4 ~ user", user);

const company = new Company();
// console.log("🚀 ~ file: index.ts ~ line 8 ~ company", company);

const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
