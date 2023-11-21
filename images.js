const resTitles = ['Result 1', 'Result 2', 'Result 3', 'Result 4']

const baseImages = [
  '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'
];

// this is the result data after the analysis sent to the frontend
const resultData = [
  {
    'images': [baseImages[0]],
    'is_displayed': false,
    'result': {
      'result':true,
      'info': {
        'Drive Shaft Oil Seal': {
          'count': 1,
          'pass': true
        },
        'Oil Pump Gear': {
          'count': 1,
          'pass': true
        },
        'TSP Sprocket': {
          'count': 1,
          'pass': true
        }
      },
      'cameraId': '074fb34b-84bd-4c3a-bbb4-cbb611dabdf5',
      'groupId': 'a25b12a5-4762-4690-baf3-754c115640e4',
      'iterator': 0
    }
  },
  {
    'images': [baseImages[1]],
    'is_displayed': false,
    'result': {
      'result':false,
      'info': {
        'Drive Shaft Oil Seal': {
          'count': 0,
          'pass': false
        },
        'Oil Pump Gear': {
          'count': 1,
          'pass': true
        },
        'TSP Sprocket': {
          'count': 1,
          'pass': true
        }
      },
      'cameraId': '074fb34b-84bd-4c3a-bbb4-cbb611dabdf5',
      'groupId': 'a25b12a5-4762-4690-baf3-754c115640e4',
      'iterator': 0
    }
  },
  {
    'images': [baseImages[2]],
    'is_displayed': false,
    'result': {
      'result':false,
      'info': {
        'Drive Shaft Oil Seal': {
          'count': 1,
          'pass': true
        },
        'Oil Pump Gear': {
          'count': 0,
          'pass': false
        },
        'TSP Sprocket': {
          'count': 1,
          'pass': true
        }
      },
      'cameraId': '074fb34b-84bd-4c3a-bbb4-cbb611dabdf5',
      'groupId': 'a25b12a5-4762-4690-baf3-754c115640e4',
      'iterator': 0
    }
  },
  {
    'images': [baseImages[3]],
    'is_displayed': false,
    'result': {
      'result':false,
      'info': {
        'Drive Shaft Oil Seal': {
          'count': 1,
          'pass': true
        },
        'Oil Pump Gear': {
          'count': 1,
          'pass': true
        },
        'TSP Sprocket': {
          'count': 0,
          'pass': false
        }
      },
      'cameraId': '074fb34b-84bd-4c3a-bbb4-cbb611dabdf5',
      'groupId': 'a25b12a5-4762-4690-baf3-754c115640e4',
      'iterator': 0
    }
  }
]

module.exports = {resultData, resTitles}