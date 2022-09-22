import styles from './selector.module.scss';
import { Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;

interface ISelector {
  tag1: string;
  tag2: string;
  tag3: string;
  tag4?: string;
  tag5?: string;
  tag6?: string;
  tag7?: string;
  tag8?: string;
  tag9?: string;
  tag10?: string;
  tag11?: string;
  tag12?: string;
  tag13?: string;
}

const Selector: React.FC<ISelector> = ({
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  tag7,
  tag8,
  tag9,
  tag10,
  tag11,
  tag12,
  tag13,
}) => {
  return (
    <div className={styles.selectorStyle}>
      <Select defaultValue="Choose..." bordered={false}>
        {tag1 ? <Option value={tag1}>{tag1}</Option> : ''}
        {tag2 ? <Option value={tag2}>{tag2}</Option> : ''}
        {tag3 ? <Option value={tag3}>{tag3}</Option> : ''}
        {tag4 ? <Option value={tag4}>{tag4}</Option> : ''}
        {tag5 ? <Option value={tag5}>{tag5}</Option> : ''}
        {tag6 ? <Option value={tag6}>{tag6}</Option> : ''}
        {tag7 ? <Option value={tag7}>{tag7}</Option> : ''}
        {tag8 ? <Option value={tag8}>{tag8}</Option> : ''}
        {tag9 ? <Option value={tag9}>{tag9}</Option> : ''}
        {tag10 ? <Option value={tag10}>{tag10}</Option> : ''}
        {tag11 ? <Option value={tag11}>{tag11}</Option> : ''}
        {tag12 ? <Option value={tag12}>{tag12}</Option> : ''}
        {tag13 ? <Option value={tag13}>{tag13}</Option> : ''}
      </Select>
    </div>
  );
};

export default Selector;
