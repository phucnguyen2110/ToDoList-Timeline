import ToDo from './Todo';
import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';

const ToDoList = ({toDoList, handleToggle, handleFilter, handleDelete}) => {
    return (
        <div>
            <div className="btn">
                <button onClick={handleFilter}>Xóa Những Nhiệm Vụ Đã Hoàn Thành</button>
            </div>
            <VerticalTimeline>
                {
                    toDoList.map(todo => {
                        return (
                            <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} 
                            handleDelete={handleDelete}/>
                        )
                    })
                }
            <VerticalTimelineElement icon={<StarIcon/>}
            iconStyle={{ background: 'rgba(0, 202, 0, 0.947)', color: '#fff' }}>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default ToDoList;
