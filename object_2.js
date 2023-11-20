//配列定義
let users = [
  {
    username: '山田',
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: false
    }
  },
  {
    username: '佐藤',
    permissions: {
      canRead: false,
      canWrite: true,
      canDelete: false
    }
  },
  {
    username: '原田',
    permissions: {
      canRead: false,
      canWrite: true,
      canDelete: true
    }
  },
  {
    username: '斉藤',
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: true
    }
  },
  {
    username: '高田',
    permissions: {
      canRead: false,
      canWrite: false,
      canDelete: false
    }
  }
];

//関数定義
function checkPermission(Username, Permission) {
  //内容
}

//関数呼び出し
checkPermission('山田', 'canWrite')
