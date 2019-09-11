import is from "@sindresorhus/is";

export type ApiFunction = (req: import("express").Request, res: import('express').Response) => any | Promise<any>
export function Api(func: ApiFunction,code:number=200) {
    return (req, res: import('express').Response) => {
        Promise.resolve(new Promise((r, j) => {
            try {
                r(func(req, res));
            } catch (e) {
                j(e);
            }
        }))
            .then(data => {
                if (res.headersSent) {
                    return void 0;
                }

                if (is.primitive(data)) {
                    res.status(code).send(data)
                } else if (is.object(data)) {
                    res.status(code).json(data);
                } else {
                    res.status(code).send(data);
                }
            })
            .catch((e) => {
                console.log(e);
                if (is.error(e)) {
                    res.status(500).send(`
<pre>
${e.message}:
${e.stack}
</pre>
`.trim());
                } else if (is.object(e)) {
                    res.status(500).json(e)
                }else{
                    res.send(e);        
                }
            })
    }
}