import axios from "axios";
import { string } from "yup";

const axiosInstance = axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true

})


type createMasterCategoryApiArgType={
    name:string,
    image:string,
    desc:string

}

type filePayloadType={
        name:string,
        desc:string,
        bundle:string,
        group:string
}
type groupPayloadType={
      name:string,
        desc:string,
        bundle:string,
        image:string
}
type resourcePayloadType={
     name:string,
    bundle:string,
    group:string,
    file:string,
    type:string,
    display:boolean,
    url:string,
    size:number
}

// bundle endpoints
export const createMasterCategoryApi=(payload:createMasterCategoryApiArgType)=>axiosInstance.post("/bundle/create",payload)
export const fetchAllLibraryCategoryApi=()=>axiosInstance.get("/bundle");
export const fetchBundlebyIdApi=(id:string) =>axiosInstance.get(`/bundle/${id}`)



// file endpoint

export const createFileApi=(payload:filePayloadType)=>axiosInstance.post("/file/create",payload)
export const fetchFileByIdApi=(id:string)=>axiosInstance.get(`/file/${id}`)
export const getFilesByGroupApi=(id:string)=>axiosInstance.get(`/file/byGroup/${id}`)

// group point 
export const createGroupApi=(payload:groupPayloadType)=>axiosInstance.post("/group/create",payload)
export const getGroupByBundleApi=(bundleId:string)=>axiosInstance.get(`/group/byBundle/${bundleId}`)


// resource
export const createResourceApi=(payload:resourcePayloadType)=>axiosInstance.post("/resource/create",payload)

// upload 

export const uploadImageApi=(url:string|ArrayBuffer)=>axiosInstance.post("/resource/upload/image",{data:url})
export const uploadVideoApi=(url:string|ArrayBuffer)=>axiosInstance.post("/resource/upload/video",{data:url})



// auth 

export const loginApi=(payload:{email:string,password:string})=>axiosInstance.post(`/auth/login`,payload)
export const registerApi=(payload:{email:string,username:string,password:string})=>axiosInstance.post(`/auth/register`,payload)
export const emailConfirmationApi=(token:string)=>axiosInstance.post(`/auth/email_confirmation/${token}`)
export const sentEmailToVerifyAccountApi=(email:string)=>axiosInstance.post("/auth/sent_verification_link",{email})


export const sentEmailToResetPasswordApi=(email:string)=>axiosInstance.post("/auth/sent_emai_reset_password",{email})
export const  resetPasswordApi=(password:string,token:string)=>axiosInstance.post("/auth/reset_password",{password,token})
