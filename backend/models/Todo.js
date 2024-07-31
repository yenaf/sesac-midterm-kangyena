
const todoModel = (sequelize, DataTypes) => {

  const Todo = sequelize.define(
      // param1: 모델 이름 설정
      'Todo',
      // parma2: 모델 컬럼 정의 
      {
          id: {
              // id int not null primary key auto_increment 
              type: DataTypes.INTEGER,
              primaryKey: true,
              allowNull: false,
              autoIncrement: true,
          },
          title: {
              type: DataTypes.STRING(255),
              allowNull: false,
          },
          done: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
          }
      },
      // param3: 모델 옵션 정의
      {
          freezeTableName: true, // 테이블 명 고정 
          timestamps: true, // createAt & updateAt 활성화.데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
      }
  );

  return Todo;
}

module.exports = todoModel;