/**
 * http请求handle
 */
import { Events } from 'ionic-angular';
import { UIService } from "../provider/UIService";
export declare class HttpHandle {
    events: Events;
    uiService: UIService;
    constructor(events: Events, uiService: UIService);
}
