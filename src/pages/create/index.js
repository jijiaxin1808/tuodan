import Input from 'antd/es/input'
import Button from 'antd/es/button'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import message from 'antd/es/message'
// import "./index.css";
import axios from 'axios'
import qs from 'qs'
import 'braft-editor/dist/index.css'
import React, { useEffect, useState, forwardRef } from 'react'
import BraftEditor from 'braft-editor'
import Form from 'antd/es/form'


// const { Option } = Select;
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 16 },
};


function FormDemo (props) {
	const { getFieldDecorator } = props.form;

	useEffect(()=>{
		setTimeout(() => {
			props.form.setFieldsValue({
				content: BraftEditor.createEditorState("")
			});
		}, 1000);
	},[]);


	const [data, setData] = useState([]);
	useEffect(() =>{
		axios({
			method: "get",
			url: "http://yjxt.elatis.cn/options/name/column"
		}).then(res => {
		  if (res.data.code === 0) {
				setData(res.data.data);
				console.log(res.data);
			}

		}).catch(err => {
			console.log(err);
		});
	}, []);






	const [state, setState] = useState("");
	const judgeStateP = () => {
	 setState("publish");
	};

	const judgeStateC = () =>{
	  setState("create");
	};

	const handleSubmit = (event) => {
  	event.preventDefault();
		console.log(state);
  	props.form.validateFields((error, values) => {
  		if (!error) {
  			const submitData = {
  				title: values.title,
					// department: values.department,
					name: localStorage.getItem('token'),
  				message: values.content.toHTML()// or values.content.toHTML()
  			};
  			if (state === "publish") {
					submitData.status = "publish";
				}
        const dat = qs.stringify(submitData)
  			axios({
					method: "post",
					url: "http://47.93.243.135:3000/create",
				          data: dat
				}).then( res => {
					if(res.data.code === 0) {
						if(state === "publish"){
							message.success("发布成功");
						}
						else message.success("申请成功");
					}
					else message.warn("权限不足");
				}
					
				).catch( err => {
					console.log(err);
				});
  			console.log("submitData",submitData);
  		}
  	});

	};



	const controls = ["font-size", "bold", "italic", "underline", "text-color", "separator", "link", {key: "media",title:"视频"}];





  	return (
  		<div className="demo-container" style ={{paddingTop:"2vw"}}>
  			<div className = "title">
  
  			</div>
  			<Form onSubmit={handleSubmit}>
  				<Form.Item {...formItemLayout} label="文章标题">
  					{getFieldDecorator("title", {
  						rules: [{
  							required: true,
  							message: "请输入标题",
  						}],
  					})(
  						<Input size="large" placeholder="请输入标题" />
  					)}
  				</Form.Item>
  				<Form.Item {...formItemLayout} label="文章正文">
  					{getFieldDecorator("content", {
  						validateTrigger: "onBlur",
  						rules: [{
  							required: true,
  							validator: (_, value, callback) => {
  								if (value.isEmpty()) {
  									callback("请输入正文内容");
  								} else {
  									callback();
  								}
  							}
  						}],
  					})(
  						<BraftEditor

  							className="my-editor"
  							controls={controls}
  							placeholder="请输入正文内容"  			
  						/>
  					)}
  				</Form.Item>
  				<Form.Item {...formItemLayout}> 

  					<Row>

  						
  						<Col span={4} offset={16}>
  							<Button size="large" type="primary" htmlType="submit" onClick={judgeStateP}>发布日记</Button>
  						</Col>
  					</Row>
  				</Form.Item>
  			</Form>
  		</div>
  	);
	//  调用了BraftEditor 的库进行文章的存储 文章最后以html语句的形式发给后端  发送name给后端  然后根据name存文章内容 和 创建文章id
}

export default Form.create()(forwardRef(FormDemo));