import { Events } from 'ionic-angular';
import { UIService } from "../provider/UIService";
export declare class HttpHandle {
    events: Events;
    private uiService;
    constructor(events: Events, uiService: UIService);
}
