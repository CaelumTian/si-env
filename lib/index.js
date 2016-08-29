/**
 * Created by caelumtian on 16/8/29.
 */
import os from './os.js';
import screen from './screen';


const search = window.location.search.replace(/^\?/, "");
let params = {};
if(search) {
    let t_params = search.split("&");
    for(let i = 0, len = t_params.length; i < len; i++) {
        let p = t_params[i].split("=")[0];
        let key = p + "=";
        let value = t_params[i].split(key)[1];

        t_params[i] = t_params[i].split("=");

        try {
            params[t_params[i][0]] = decodeURIComponent(value);
        }catch(e) {
            params[t_params[i][0]] = value;
        }
    }
}

export {
    os,
    screen,
    params
};