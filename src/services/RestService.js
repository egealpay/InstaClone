import {
    SampleImage10MB,
    SampleImage10MB2,
    SampleImage15MB,
    SampleVideo1,
    SampleVideo2,
    SampleVideo3,
    SampleVideo4
} from "../assets";

class RestService {
    static exploreContent = [{
        username: 'Allen',
        content: {file: SampleImage10MB, type: 'image'}
    }, {
        username: 'Ja',
        content: {file: SampleImage10MB2, type: 'image'}
    }, {
        username: 'Anthony',
        content: {file: SampleVideo1, type: 'video'}
    }, {
        username: 'Tim',
        content: {file: SampleImage15MB, type: 'image'}
    }, {
        username: 'LeBron',
        content: {file: SampleVideo2, type: 'video'}
    }, {
        username: 'Bill',
        content: {file: SampleImage10MB, type: 'image'}
    }, {
        username: 'Steve',
        content: {file: SampleVideo3, type: 'video'}
    }, {
        username: 'Isabella',
        content: {file: SampleImage10MB2, type: 'image'}
    }, {
        username: 'Bella',
        content: {file: SampleImage15MB, type: 'image'}
    }, {
        username: 'Ray',
        content: {file: SampleImage10MB, type: 'image'}
    }, {
        username: 'Kendall',
        content: {file: SampleImage10MB2, type: 'image'}
    }, {
        username: 'Kyle',
        content: {file: SampleVideo4, type: 'video'}
    }];

    static feedContent = [{
        user: {
            username: 'Charlotte',
            profileImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        contents: [{file: SampleImage10MB, type: 'image'}]
    }, {
        user: {
            username: 'Miley',
            profileImageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6HtMDneH4Pq_g1xMxIfwWUVKNsV63LbpSJn7G-L_vwnMJEl7D'
        },
        contents: [{file: SampleImage10MB, type: 'image'}, {file: SampleImage10MB2, type: 'image'}]
    }, {
        user: {
            username: 'Tim',
            profileImageUrl: 'https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2021%2F01%2F1212232039-850x560.jpeg'
        },
        contents: [{file: SampleVideo1, type: 'video'}]
    }];

    static getFeed() {
        return new Promise((resolve, reject) => {
            resolve(this.feedContent);
        });
    }

    static getExplore() {
        return new Promise((resolve, reject) => {
            resolve(this.exploreContent);
        });
    }

    static getExploreBy(toSearch) {
        return new Promise((resolve, reject) => {
            resolve(this.exploreContent.filter(content => content.username.toLowerCase().includes(toSearch)));
        })
    }
}

export default RestService;
