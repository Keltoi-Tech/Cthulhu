import {App} from '../app.js';
import { sampleView } from '../crosscutting/injection.js';
export class StoreApp extends App
{
    constructor(){
        super(
            sampleView
        )
    }
}