import { HandlerService } from './handler.service';
import { MobilizeService } from './mobilize.service';
import { ParsingService } from './parsing.service';

/**
 * Export singleton services
 */
export const services = {
    handler: new HandlerService(),
    mobilize: new MobilizeService(),
    parsing: new ParsingService()
};
