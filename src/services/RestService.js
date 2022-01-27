import {SampleImage10MB, SampleImage10MB2, SampleVideo1} from "../assets";

class RestService {
    static getFeed() {
        return new Promise((resolve, reject) => {
            resolve([{
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
            }]);
        });
    }
}

export default RestService;
