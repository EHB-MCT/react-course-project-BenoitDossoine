interface LibraryGame{
    about_the_game: string,
    achievements: object,
    appid: number
    background: string
    background_raw: string
    categories: Array<object>,
    content_descriptors: object,
    controller_support: string,
    demos: Array<object>,
    detailed_description: string,
    developers: Array<string>
    dlc: Array<number>
    genres: Array<object>,
    header_image: string,
    img_icon_url: string,
    is_free: Boolean,
    legal_notice: string,
    linux_requirements: object,
    mac_requirements: object,
    metacritic: object,
    movies: Array<object>,
    name: string,
    package_groups: Array<object>,
    packages: Array<number>,
    pc_requirements: object,
    platforms: object,
    playtime_forever: number
    price_overview: object,
    publishers: Array<string>,
    recommendations: object,
    release_date: object,
    required_age: number,
    screenshots: Array<object>
    short_description: string,
    steam_appid: number,
    support_info: object,
    supported_languages: string,
    type: string,
    website: string,
}

export default LibraryGame;