import styles from './selector.module.scss';
import { Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;

const Selector = () => {
  return (
    <div className={styles.selectorStyle}>
      <Select defaultValue="Fantastic" bordered={false}>
        <Option value="jack">Horror</Option>
        <Option value="lucy">Humor</Option>
        <Option value="Yiminghe">Fantastic</Option>
        <Option value="Yiminghe">Romantic</Option>
      </Select>
    </div>
  );
};

export default Selector;
