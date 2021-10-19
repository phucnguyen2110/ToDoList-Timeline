/* eslint-disable react/jsx-no-undef */
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { confirmAlert } from 'react-confirm-alert'; // Import lib
import 'react-confirm-alert/src/react-confirm-alert.css'; //Import CSS
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const ToDo = ({todo, handleToggle, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Thông báo',
            message: 'Hành động này không thể khôi phục, bạn có chắc chắn muốn thực hiện không?',
            buttons: [
                {
                label: 'Có',
                onClick: () => handleDelete(e.target.dataset.id)
                },
                {
                label: 'Không',
                }
            ]
        });
    }

    const myClass = todo.complete ? "strick" : "nostrick";
    const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
    const title = todo.complete ? "Thật tuyệt vời, bạn đã hoàn thành xong nhiệm vụ !!!" : "Cố gắng làm nhiệm vụ nào!!!";
    const btnTitle = todo.complete ? 'Đã hoàn thành' : 'Hoàn thành';
    const btnClass = todo.complete ? 'btn_Accomplished' : 'btn_complete';
    const btnDelete = todo.complete ? 'btn_del_Accomplished' : 'btn_del_complete';

    return (
        <div className="contains-list">
            <VerticalTimelineElement className={myClass}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={"Thời điểm bắt đầu: " + todo.dateOf} id={String(todo.id)} icon={Icon}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <button onClick={handleClick} data-id={String(todo.id)}
                className={btnClass}>{btnTitle}</button>
                <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                onClick={handleClickDelete} className={btnDelete}>Xóa</button>
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <p>Nhiệm vụ: {todo.task}</p>
            </VerticalTimelineElement>
        </div>
    );
};
export default ToDo;