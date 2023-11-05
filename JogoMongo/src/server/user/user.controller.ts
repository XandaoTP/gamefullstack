import { JsonController, Get } from 'routing-controllers';
import { connect, Schema, model} from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

interface Iuser {
    name: string,
    surname: string,
    email: string
};

const userSchema = new Schema<Iuser>({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    surname: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
    }
});

const User = model<Iuser>('User', userSchema);

@JsonController('/users')
export class UserController {
    @Get()
    async getAll() {
        await connect(process.env.DB_URL ?? '');
        await User.insertMany([
            { name: 'Ale', surname: 'afonso', email: 'xandao@oi.com'},
            { name: 'xand', surname: 'afonso', email: 'xao@oi.com'},
            { name: 'alexandre', surname: 'afonso', email: 'x@oi.com'}

        ]);
        const users = await User.find();

        return users;
    }
}