const parks = [
    {
        fullName: "National Park one",
        image: "https://api.time.com/wp-content/uploads/2016/08/gettyimages-535829001.jpg",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    },
    {
        fullName: "National Park two",
        image: "https://www.gannett-cdn.com/-mm-/42cb2ab39386d022d7e20e94b6878b14f637e89c/c=0-214-4256-2619/local/-/media/2017/12/01/Visalia/Visalia/636477485241079270-uscpcent02-6uetwl461fp1e2dphj1m-original.jpg",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    },
    {
        fullName: "National Park three",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiker-in-north-window-arch-royalty-free-image-1588786762.jpg?crop=1.00xw:0.752xh;0,0.103xh&resize=1200:*",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    },
    {
        fullName: "National Park four",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYRiltJsOEKh3r6EAuzucZAUQlAZKIHyR4A&usqp=CAU",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    },
    {
        fullName: "National Park five",
        image: "https://lp-cms-production.imgix.net/2020-11/LPT0418_013.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
        fees: "test description",
        hours: "9am - 8pm",
        alerts: 'Weather Advisory',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat. In id felis bibendum, egestas libero et, ultrices lectus. Aenean faucibus dolor vitae ornare consectetur. Mauris ullamcorper tortor eget laoreet ultricies. Nullam sit amet convallis erat. Donec venenatis dolor erat, sit amet sollicitudin tellus euismod sed. Donec eu ornare turpis. Vestibulum eu placerat diam. In a mauris quis dolor ultrices porttitor sed nec nibh. Donec blandit tortor auctor, tempor metus in, consectetur dui.',
        weather: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et maximus mauris. Cras lobortis lectus vitae molestie hendrerit. Proin faucibus condimentum enim, at pulvinar mauris hendrerit nec. Vivamus tincidunt mauris non metus consectetur pellentesque. Cras laoreet eros at nisi aliquam, bibendum tincidunt urna feugiat.',
        activities: [
            'Biking',
            'Hiking',
            'Swimming'

        ],
        amenities: [
            'Water Pump',
            'Bathrooms',
            'Campground'
        ]
    },
    
]

export default parks