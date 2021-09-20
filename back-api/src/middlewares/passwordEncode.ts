import crypto from 'crypto'

const passwordEncode = (password: string):string => {
    const hash = crypto.createHash('sha256');
    const data = hash.update(password, 'utf-8');
    const gen_hash= data.digest('hex');
    return gen_hash
}

export default passwordEncode