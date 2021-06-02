export declare class App {
    _id: string | undefined;
    description: string | undefined;
    appCenterStyle: AppCenterStyle | undefined;
    logo: Logo | undefined;
    users: Array<string> | undefined;
    groups: Array<string> | undefined;
    constructor(data?: App);
}
export declare class AppCenterStyle {
    theme: string | undefined;
    bannerColor: string | undefined;
    primaryColor: string | undefined;
    textColor: string | undefined;
    constructor(data?: AppCenterStyle);
}
export declare class Logo {
    full: string | undefined;
    thumbnail: string | undefined;
    constructor(data?: Logo);
}
export declare class UserDetails {
    _id: string | undefined;
    basicDetails: BasicDetails | undefined;
    enableSessionRefresh: boolean | undefined;
    username: string | undefined;
    sessionTime: number | undefined;
    accessControl: AccessControl | undefined;
    description: string | undefined;
    apps: App[] | undefined;
    token: string | undefined;
    rToken: string | undefined;
    expiresIn: number | undefined;
    serverTime: number | undefined;
    auth: Auth | undefined;
    isSuperAdmin: boolean | undefined;
    rbacBotTokenDuration: number | undefined;
    rbacHbInterval: number | undefined;
    rbacUserCloseWindowToLogout: boolean | undefined;
    rbacUserToSingleSession: boolean | undefined;
    rbacUserTokenDuration: number | undefined;
    rbacUserTokenRefresh: boolean | undefined;
    googleApiKey: string | undefined;
    uuid: string | undefined;
    lastLogin: any | undefined;
    bot: boolean | undefined;
    defaultTimezone: string | undefined;
    b2BEnable: boolean | undefined;
    constructor(data?: UserDetails);
}
export declare class Auth {
    isLdap: boolean | undefined;
    dn: string | undefined;
    authType: string | undefined;
    constructor(data?: Auth);
}
export declare class AccessControl {
    apps: App[] | undefined;
    accessLevel: string | undefined;
    constructor(data?: AccessControl);
}
export declare class BasicDetails {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    constructor(data?: BasicDetails);
}
export declare class Credentials {
    host?: string;
    /**
     * @description Username or Client ID
     */
    username: string | undefined;
    /**
     * @description Password or API Key
     */
    password: string | undefined;
    /**
     * @description Available Authentication Token
     */
    token?: string;
    constructor(data?: Credentials);
}
export declare class ListOptions {
    select: string | undefined;
    sort: string | undefined;
    page: number | undefined;
    count: number | undefined;
    filter: object | undefined;
    constructor(data: ListOptions);
}
export declare class DataService {
    _id: string | undefined;
    name: string | undefined;
    description: string | undefined;
    api: string | undefined;
    definition: Array<SchemaField>;
    status: string | undefined;
    preHooks: Array<WebHook>;
    webHooks: Array<WebHook>;
    workflowHooks: {
        postHooks: {
            approve: Array<WebHook>;
            discard: Array<WebHook>;
            reject: Array<WebHook>;
            rework: Array<WebHook>;
            submit: Array<WebHook>;
        };
    };
    role: {
        fields: {
            [key: string]: {
                _t: string;
                _p: {
                    [key: string]: string;
                };
            };
        };
        roles: Array<RoleBlock>;
    };
    constructor(data?: DataService);
}
export declare class RoleBlock {
    id: string;
    name: string | undefined;
    description: string | undefined;
    manageRole: boolean;
    viewRole: boolean;
    skipReviewRole: boolean;
    operations: Array<{
        method: RoleMethods;
    }>;
    constructor(data?: RoleBlock);
    setName(name: string): void;
    setDescription(description: string | undefined): void;
    enableCreate(): RoleBlock;
    disableCreate(): RoleBlock;
    enableEdit(): RoleBlock;
    disableEdit(): RoleBlock;
    enableDelete(): RoleBlock;
    disableDelete(): RoleBlock;
    enableReview(): RoleBlock;
    disableReview(): RoleBlock;
    enableSkipReview(): RoleBlock;
    disableSkipReview(): RoleBlock;
}
export declare enum RoleMethods {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
    REVIEW = "REVIEW",
    SKIP_REVIEW = "SKIP_REVIEW"
}
export declare class ErrorResponse {
    statusCode?: number;
    body?: object;
    message?: string;
    constructor(data: ErrorResponse | any);
}
export declare class DataStackDocument {
    _id: number | undefined;
    _metadata: Metadata | undefined;
    [key: string]: any;
    constructor(data: any);
}
export declare class Metadata {
    deleted: boolean;
    lastUpdated: Date | undefined;
    lastUpdatedBy: string;
    createdAt: Date | undefined;
    version: {
        document: number;
        release: string;
    } | undefined;
    constructor(data: Metadata);
}
export declare class WebHook {
    name: string;
    url: string;
    failMessage: string;
    constructor(data: WebHook);
}
export declare class SchemaField {
    private key;
    private type;
    private properties;
    private definition;
    constructor(data?: SchemaField);
    newField(data?: SchemaField): SchemaField;
    getName(): string | undefined;
    setName(name: string): void;
    getKey(): string | undefined;
    setKey(key: string): void;
    getType(): SchemaFieldTypes;
    setType(type: SchemaFieldTypes): SchemaField;
    addChildField(data: SchemaField): this;
    removeChildField(name: string): this;
    getProperties(): SchemaFieldProperties;
}
export declare enum SchemaFieldTypes {
    STRING = "String",
    NUMBER = "Number",
    BOOLEAN = "Boolean",
    DATA = "Data",
    OBJECT = "Object",
    ARRAY = "Array",
    RELATION = "Relation",
    SCHEMA = "Global",
    LOCATION = "Geojson"
}
export declare class SchemaFieldProperties {
    private name;
    private required;
    private unique;
    private createOnly;
    private email;
    private password;
    private enum;
    private tokens;
    private maxLength;
    private minLength;
    private max;
    private min;
    private pattern;
    private default;
    private relatedTo;
    private schema;
    private dateType;
    constructor(data?: SchemaFieldProperties);
    getName(): string | undefined;
    setName(name: string): void;
    isRequired(): boolean;
    setRequired(required: boolean): void;
    isUnique(): boolean;
    setUnique(unique: boolean): void;
    isCreateOnly(): boolean;
    setCreateOnly(createOnly: boolean): void;
    isEmail(): boolean;
    setEmail(email: boolean): void;
    isPassword(): boolean;
    setPassword(password: boolean): void;
    getMaxLength(): number | undefined;
    setMaxLength(maxLength: number): void;
    getMinLength(): number | undefined;
    setMinLength(minLength: number): void;
    getMax(): number | undefined;
    setMax(max: number): void;
    getMin(): number | undefined;
    setMin(min: number): void;
    getPattern(): string | undefined;
    setPattern(pattern: string): void;
    getDefault(): string | undefined;
    setDefault(value: string): void;
    getRelatedTo(): string | undefined;
    setRelatedTo(relatedTo: string): void;
    getSchema(): string | undefined;
    setSchema(schema: string): void;
}
