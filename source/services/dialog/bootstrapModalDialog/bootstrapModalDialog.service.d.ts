import * as ng from 'angular';
import { services } from 'typescript-angular-utilities';
import __promise = services.promise;
import { IDialogCloseHandler, IDialogService, IDialogImplementation, IDialogInstance } from '../dialog.service';
export declare var serviceName: string;
export interface IBootstrapModalDialogService extends IDialogService<IBootstrapModalDialogSettings> {
}
export interface IBootstrapModalDialogSettings extends ng.ui.bootstrap.IModalSettings {
    resolveToDialog?: boolean;
    dialogAs?: string;
}
export declare class BootstrapModalDialogService implements IDialogImplementation<IBootstrapModalDialogSettings> {
    private $modal;
    private $rootScope;
    private promise;
    closeHandler: IDialogCloseHandler;
    static $inject: string[];
    constructor($modal: ng.ui.bootstrap.IModalService, $rootScope: ng.IRootScopeService, promise: __promise.IPromiseUtility);
    open(options: IBootstrapModalDialogSettings, closeHandler?: IDialogCloseHandler): IDialogInstance;
    modalClosing: {
        (event: ng.IAngularEvent, reason: any, explicitlyClosed: boolean): void;
    };
    private configureModalSettings(options, resolveData);
}