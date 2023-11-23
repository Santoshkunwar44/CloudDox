export type fileType = {
    _id:string,
    name:string,
    desc:string,
    bundle:BundleType,
    group:GroupType,
    resources:ResourceType[]
}

export type FileTypeProps = {
    _id:string,
     name:string,
    desc:string,
    bundle:BundleType |null,
    group:GroupType |null,
    resources:ResourceType[]
}
 
export type ResourceType={
    _id:string,
    url:string,
    name:string,
    size:number,
    type: "audio"|"video"|"pdf"|"template",
    file:fileType,
    display:boolean,
}
export type BundleType={
    _id:string,
    name:string,
    image:string,
    desc:string,                                     
    groups:GroupType[]
}
export type GroupType={
    _id:string,
    name:string
    image:string,
    desc:string,
    bundle:BundleType,
    files:string[]
}
export type UserType={
    _id:string,
    username:string, 
    email:string, 
    isAdmin:boolean,
}
export type GroupTypeState={
    name:string
    image:string,
    desc:string,
    bundle:BundleType|null,
    files:fileType[]
}

export type userType={
    _id:string,
    username:string,
    email:string,
    password:string,
    isAdmin:boolean,
    isVerified:boolean,
    createdAt:string,
    modifiedAt:string,
}