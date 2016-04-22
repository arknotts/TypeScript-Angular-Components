import 'ui-select';
import 'ui-select/dist/select.css';
import * as angular from 'angular';
import { services } from 'typescript-angular-utilities';
import __object = services.object;
import { InputController } from '../input/input';
import { IComponentValidatorFactory } from '../../services/componentValidator/componentValidator.service';
export declare const moduleName: string;
export declare const componentName: string;
export declare const controllerName: string;
export interface ISelectParams {
    item: any;
}
export declare class SelectController extends InputController {
    private $q;
    private object;
    options: any[];
    getOptions: {
        (): angular.IPromise<any[]>;
    };
    selector: {
        (item: any): string;
    } | string;
    ngDisabled: boolean;
    nullOption: string;
    select: {
        (params: ISelectParams): void;
    };
    loading: boolean;
    private _nullOption;
    selection: any;
    static $inject: string[];
    constructor($scope: angular.IScope, $attrs: angular.IAttributes, $q: angular.IQService, object: __object.IObjectUtility, componentValidatorFactory: IComponentValidatorFactory);
    $onInit(): void;
    getDisplayName(item: any): string;
    loadItems(): angular.IPromise<any[]>;
    configureOptions(options: any[]): any[];
}
