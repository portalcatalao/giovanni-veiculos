export interface IVehicle {
    id: number,
    identifier: string,
    active: boolean,
    sold: boolean,
    price: string,
    visible_price: boolean,
    year_manufacture: number,
    year_model: number,
    mileage_traveled: number,
    new: boolean,
    plate?: string,
    created_at: {
        date: string,
        timezone_type: 3,
        timezone: string
    },
    gallery: {
        images: Array<IImage>,
        order: Array<number>
    },
    favorite: boolean,
    views: number,
    version: IVersion,
    number_doors?: number,
    type: string,
    description?: string
    color: {
        id: number,
        id_string: string,
        name: string,
        cod?: number
    }
}

interface IImage {
    id: number,
    name: string,
    path: string,
    extension: string,
    size?: number
}

export interface IVersion {
    id: number,
    id_string: string,
    name: string,
    fipe_code: string,
    model: IModel,
}

export interface IModel {
    id: number,
    id_string: string,
    name: string,
    ico?: IImage,
    brand: IBrand,
}

export interface IBrand {
    id: number,
    id_string: string,
    name: string,
    ico?: IImage
}