import { Api } from "../util/api";
import {ConnectionString} from "../provider/server/connection-string";
import {Resolve} from "../container";
export default Api(async(req)=>{
    return await Resolve.get(ConnectionString)
})