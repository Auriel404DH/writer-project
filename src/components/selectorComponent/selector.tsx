import styles from './selector.module.scss';
import { Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;

interface ISelector {
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
}

const Selector: React.FC<ISelector> = ({ tag1, tag2, tag3, tag4 }) => {
  return (
    <div className={styles.selectorStyle}>
      <Select defaultValue="Choose..." bordered={false}>
        <Option value={tag1}>{tag1}</Option>
        <Option value={tag2}>{tag2}</Option>
        <Option value={tag3}>{tag3}</Option>
        <Option value={tag4}>{tag4}</Option>
      </Select>
    </div>
  );
};

export default Selector;
