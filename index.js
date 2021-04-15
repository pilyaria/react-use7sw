import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Tabs } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Checkbox, Button, Cascader, Radio, Tooltip, Modal, Popconfirm, message, Select, Input, Row, Col, InputNumber, Form } from 'antd';
import {
  EditTwoTone,
  DeleteTwoTone,
  SnippetsTwoTone,
  PlusCircleTwoTone,
  FileExcelOutlined,
  DownloadOutlined,
  QuestionCircleTwoTone,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const App = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>По алфавиту</Radio>
    <Radio value={2}>B заданном порядке</Radio>
  </Radio.Group>
);

const { TabPane } = Tabs;

const { Column, ColumnGroup } = Table;


const options = [
  {
    value: 'vedomosti',
    label: 'Ведомости',
  },
  {
    value: 'otchety',
    label: 'Месячные отчёты',
  },
  {
    value: 'kadr',
    label: 'Кадр',
  },
  {
    value: 'grafiki',
    label: 'Графики',
  },
  {
    value: 'karta',
    label: 'Карта',
  },
];


const data = [
  {
    key: '1',
    info: 'Меню сайта',
    discr: <Button type="link">Настроить отображение пунктов меню</Button>,
    
  },
  {
    key: '2',
    info: 'Личный кабинет',
    discr: 'Показывать сообщения о новых событиях при входе в личный кабинет',
    action: <Checkbox onChange={onChange}></Checkbox>,
  },
   {
    key: '3',
    info: '',
    discr: 'Страница входа',
    action:
      <Cascader
        defaultValue={['vedomosti']}
        options={options}
        onChange={onChange}
      />,
    
  },
  {
    key: '4',
    info: 'Отчёт по связи',
    discr: 'Показывать адрес вместо наименования',
    action: <Checkbox onChange={onChange}></Checkbox>,
    
  },
  {
    key: '5',
    info: '',
    discr: 'Показывать статистику по группам',
    action: <Checkbox onChange={onChange}></Checkbox>,
   
  },
  {
    key: '6',
    info: 'Ведомости',
    discr: 'Сортиовка групп и абонентов',
    action: <App />,
   
  },
  {
    key: '7',
    info: '',
    discr: 'Формировать ведомости в формате PDF',
    action: <Checkbox onChange={onChange}></Checkbox>,
   
  },
  {
    key: '8',
    info: '',
    discr: 'Формировать ведомости в одной книге EXCEL',
    action: <Checkbox onChange={onChange}></Checkbox>,
   
  },
];

//наполнение таблицы на вкладке Оповещения

const data1 = [
  {
    key: '1',
    messages: 10,
    email: 'pilyar@teplo-inform.ru',
    tags: ['условия', 'контроль', 'датчики', '...'],
  },
  {
    key: '2',
    messages: 5,
    email: 'pilyar@mail.ru',
    tags: ['условия', 'контроль'],
  },
  {
    key: '3',
    messages: 3,
    email: '+79161234567',
    tags: ['датчики'],
  },
  {
    key: '4',
    messages: 1,
    email: 'test@mail.ru',
    tags: ['рассылка суточных ведомостей'],
  },
];

//Наполнение таблицы на вкладке Общее
const data0 = [
  {
    key: '1',
    info: 'Пароль',
    discr: 'Изменён год назад',
    
  },
  {
    key: '2',
    info: 
    <>
    Электронная почта
    <spacer> </spacer>
    
    <Tooltip placement="top" title={'Рекомендуем ввести адрес Вашей электронной почты. Это позволит получить пароль в письме в случае его утраты'}>
        <QuestionCircleTwoTone />
      </Tooltip>
    </>,
    
    discr: 'pilyar@teplo-inform.ru',
    
  },
],

function callback(key) {
  console.log(key);
}

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(value) {
  console.log(value);
}

const { confirm } = Modal;

function confirmPopConf() {
  message.info('Запись удалена');
}

function showConfirm() {
  confirm({
    title: 'Подтверждение',
    icon: <ExclamationCircleOutlined />,
    content: 'Вы действительно хотите удалить данное оповещение?',
    onOk() {
      console.log('Да');
    },
    onCancel() {
      console.log('Отмена');
    },
  });
}

//наполнение окна 'добавить оповещение'
//для чекбоксов
function onChangeChkBox(checkedValues) {
  console.log('checked = ', checkedValues);
}

//для инпутнамбера
function onChangeInpNum(value) {
  console.log('changed', value);
}

//для селекта 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: 'Контроль',
    dataIndex: 'col1',
    width: 150,
  },
  
  {
    title: 'Точки учёта',
    dataIndex: 'col2',
    key: 'action',
    render: () => <a>Выбрать</a>,
    width: 50
  },
  
];
const dataAddAlert = [
  {
    key: '1',
    col1: <Checkbox  value="ch1" onChange={onChangeChkBox}>Отсутствие связи с прибором</Checkbox>,
  },
  {
    key: '2',
    col1: <Checkbox  value="ch2" onChange={onChangeChkBox}>Групповые условия</Checkbox>,
  },
  {
    key: '3',
    col1: <Checkbox  value="ch3" onChange={onChangeChkBox}>Контроль переменных</Checkbox>,
  },
  {
    key: '4',
    col1: <Checkbox  value="ch4" onChange={onChangeChkBox}>Неверное время прибора</Checkbox>,
  },
  {
    key: '5',
    col1: <Checkbox  value="ch5" onChange={onChangeChkBox}>Условия прибора</Checkbox>,
  },
  {
    key: '6',
    col1: <Checkbox  value="ch6" onChange={onChangeChkBox}>Срабатывание датчиков</Checkbox>,
  },
  {
    key: '7',
    col1: <Checkbox  value="ch7" onChange={onChangeChkBox}>Сообщения о поверке</Checkbox>,
  },
  {
    key: '8',
    col1: <Checkbox  value="ch8" onChange={onChangeChkBox}>Изменение параметров прибора</Checkbox>,
  },
  {
    key: '9',
    col1: <Checkbox  value="ch9" onChange={onChangeChkBox}>Высылать месячные отчёты</Checkbox>,
  },

  
];

//Модальное окно добавления нового оповещения

class LocalizedModalAlert extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Добавить Контакт
        </Button>
        <Modal
          title="Добавление нового оповещения"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Добавить"
          cancelText="Отмена"
        >
             <div className="site-input-group-wrapper">
              <Input.Group size="large">
              <Row gutter={8}>
                <Col span={8}>
                  Тип оповещения
                </Col>
                <Col span={8}>
                  <Select defaultValue="e-mail" size="small" onChange={handleChange}>
                    <Option value="sms">SMS</Option>
                    <Option value="e-mail">e-mail</Option>
                  </Select>
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  Электронный адрес
                </Col>
                <Col span={10}>
                  <Input size="small" placeholder="pilyar@teplo-inform.ru" />
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  Сообщений подряд
                </Col>
                <Col span={8}>
                  <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={onChangeInpNum} />
                </Col>
              </Row>
              </Input.Group>
              <br />
            </div>
          <Table 
            columns={columns}
            dataSource={dataAddAlert} 
            pagination={{ pageSize: 50 }} scroll={{ y: 250 }} />
        </Modal>
      </>
    );
  }
}

//наполнение Таблицы точек учёта для рассылки
const columnsReport = [
  {
    title: 'Точки учёта',
    dataIndex: 'col1',
    width: 100,
  },
  
  {
    title: 'Удалить',
    dataIndex: 'col2',
    key: 'action',
    render: () => <a>Удалить</a>,
    width: 50
  },
  
];

const dataAddReport = [
  {
    key: '1', 
    col1: <Checkbox  value="ch1" onChange={onChangeChkBox}>1234/322</Checkbox>,
  },
  {
    key: '2',
    col1: <Checkbox  value="ch2" onChange={onChangeChkBox}>6503/021</Checkbox>,
  },
  {
    key: '3',
    col1: <Checkbox  value="ch3" onChange={onChangeChkBox}>0923/765</Checkbox>,
  },
  {
    key: '4',
    col1: <Checkbox  value="ch4" onChange={onChangeChkBox}>0201/234</Checkbox>,
  },
  

  
];

//Модальное окно добавления рассылки ведомостей
class LocalizedModalReport extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Добавить рассылку
        </Button>
        <Modal
          title="Добавление рассылки ведомостей"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Добавить"
          cancelText="Отмена"
        >
             <div className="site-input-group-wrapper">
              <Input.Group size="large">
              <Row gutter={8}>
              
                <Col span={8}>
                  Описание
                </Col>
                <Col span={10}>
                  <Input size="small" placeholder="Введите название рассылки" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={8}>
                  Расписание
                </Col> 
                <Col span={8}>
                  <Select defaultValue="Полные сутки" size="small" onChange={handleChange}>
                    <Option value="sms">Полные сутки</Option>
                    <Option value="e-mail">Цикл - 1час</Option>
                    <Option value="e-mail">Ночное</Option>
                    <Option value="e-mail">15 минут</Option>
                    <Option value="e-mail">С 2 до 22 каждые 2 часа</Option>
                  </Select>
                </Col>
                
              </Row>
              <br />
               <Row>
                <Col span={8}>
                  Название файла
                </Col> 
                <Col span={8}>
                  <Select defaultValue="Номер очки учёта" size="small" onChange={handleChange}>
                    <Option value="sms">Номер очки учёта</Option>
                    <Option value="e-mail">Номер ТУ/договор</Option>
                    
                  </Select>
                </Col>
                
              </Row>
              <br />
              <Row>
                <Col span={8}>
                  Тип ведомости
                </Col> 
                <Col span={8}>
                  <Select defaultValue="Стандартная форма ведомоти" size="small" onChange={handleChange}>
                    <Option value="sms">Стандартная форма ведомоти</Option>
                    <Option value="e-mail">Электроэнегрия</Option>
                    
                  </Select>
                </Col>
                
              </Row>
              <br />
              <Row>
                <Col span={8}>
                  Тип данных
                </Col> 
                <Col span={8}>
                  <Select defaultValue="Суточный" size="small" onChange={handleChange}>
                    <Option value="sms">Суточный</Option>
                    <Option value="e-mail">Часовой</Option>
                    <Option value="e-mail">Текущие</Option>
                    <Option value="e-mail">Месяц</Option>
                    
                  </Select>
                </Col>
                
              </Row>
              <br />
              <Row>
              <Col span={8}>
                  Период
                </Col>
              <Col span={8}>
                  <Select defaultValue="Период" size="small" onChange={handleChange}>
                    <Option value="sms">Истёкшая часть расчётного периода</Option>
                    <Option value="e-mail">Расчётный период</Option>
                    <Option value="e-mail">Сегодня</Option>
                    <Option value="e-mail">Вчера</Option>
                    
                  </Select>
                </Col>
                
              </Row>
              <br />
              
             
              </Input.Group>
            </div>
            <Button type="primary">Добавить ТУ</Button>
            <Button>Удалить</Button>
          <Table 
            columns={columnsReport}
            dataSource={dataAddReport} 
            pagination={{ pageSize: 50 }} scroll={{ y: 250 }} />
            
        </Modal>
      </>
    );
  }
}


//форма изменения пароля
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Успешно:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Ошибка:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Старый пароль"
        name="old_psw"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите старый пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Новый пароль"
        name="new_psw"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите новый пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

       <Form.Item
        label="Повторите пароль"
        name="new_psw1"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, повторите новый пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Изменить
        </Button>
      </Form.Item>
    </Form>
  );
};

//Модальное окно редактирования пароля

class LocalizedModalPsw extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Изменить
        </Button>
        <Modal
          title="Смена старого пароля"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Изменить"
          cancelText="Отмена"
        >
          <Demo />
        </Modal>
      </>
    );
  }
}

ReactDOM.render(
  <>
  <Tabs onChange={callback} type="card">
    <TabPane tab="Оповещения" key="2">
      <Table dataSource={data1}>
        <ColumnGroup title="Настройка оповещения">
          <Column 
            title=""
            dataIndex="edit" 
            key="edit"
            render={(text, record) => (
            <Space size="middle">
              <Popconfirm placement="right" title={'Вы действительно хотите удалить данное оповещение?'} onConfirm={confirmPopConf} okText="Да" cancelText="Нет">
              <Button shape="circle" icon={<EditTwoTone />} />
              </Popconfirm>
            
            </Space>
          )}
            
          />
          <Column 
            title=""
            dataIndex="delete"
            key="delete"
               render={(text, record) => (
            <Space size="middle">
              <Button shape="circle" onClick={showConfirm} icon={<DeleteTwoTone />} />
            </Space>
          )}
          />
          <Column title="e-mail/Телефон" dataIndex="email" key="email" />

          <Column 
            title={
              <Tooltip placement="top" title={'Для добавления новой рассылки на указанный e-mail нажмите на "+". В ячейке отображены все добавленные рассылки. Для редактирования рассылки кликните по её названию. Для удаления рассылки нажмите на "х"'}>
              Рассылка<br/>ведомостей<QuestionCircleTwoTone />
              </Tooltip>
            }
            dataIndex="mailing"
            key="mailing"
               render={(text, record) => (
            <Space size="middle">
              <Button shape shape="circle" onClick={showConfirm} icon={<PlusCircleTwoTone twoToneColor="#52c41a" />} />
            </Space>
          )}
          />

          <Column
            title={
              <Tooltip placement="top" title={'События, добавленные для отправки на указанный адрес/телефон'}>
              События<QuestionCircleTwoTone />
              </Tooltip>
            }
            dataIndex="tags"
            key="tags"
            render={tags => (
              <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
            )}
          />
          
          <Column 
            title={
              
              <Tooltip placement="top" title={'Количество сообщений, приходящих на почту/мобильный телефон при срабатывании события'}>
              Подряд<QuestionCircleTwoTone />
              </Tooltip>
            }
            dataIndex="messages"
            key="messages" 
          
          />
          <Column
            title={
              <Tooltip placement="top" title={'Формирование .xls файла с соответствием номеров точек учёта добавленных им оповецаниям'}>
              Экспорт<QuestionCircleTwoTone />
              </Tooltip>
            }
            key="action"
            render={(text, record) => (
              <Space size="middle">
                {/* <SnippetsTwoTone />
                <FileExcelOutlined /> */}
                <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
              </Space>
            )}
          />
        </ColumnGroup>
       
    
  </Table>
  
  <LocalizedModalAlert />
  
  <LocalizedModalReport />
    </TabPane>
    <TabPane tab="Отображение на сайте" key="1">
      <Table dataSource={data}>
        <Column 
          title=""
          key="info"
          dataIndex="info"
          //render={(text) => (
            //<Space size="middle">
              //<a>{text}</a>
            //</Space>
          //)}
        />
          
        <Column title="Настройка отображения на сайте" dataIndex="discr" key="discr" />
        <Column title="" dataIndex="action" key="action" />
          render={(text, record) => (
            <Space size="middle">
            <Checkbox onChange={onChange}></Checkbox>
            </Space>
        )}
      </Table>
    </TabPane>
    
    <TabPane tab="Общее" key="3">
      <Table dataSource={data0}>
        <Column title="" key="info" dataIndex="info" />
        <Column title="Общие настройки" dataIndex="discr" key="discr" />
        <Column
          title=""
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <LocalizedModalPsw />
            </Space>
          )}
        />
      </Table>
    </TabPane>
  </Tabs>
 
 </>,
  document.getElementById('container')
);