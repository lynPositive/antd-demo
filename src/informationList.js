import React,{ Component } from "react";
import { Table,Input,MessageBox} from 'antd';

 class InformationList extends Component {

  constructor(props){
    super(props);
    this.state={
      dataSource:[{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        phone:"123456"
      },
      {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        phone:"234567"
      },
      {
        key: '4',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        phone:"123456"
      },
      {
        key: '522',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        phone:"234567"
      },
      {
        key: '188',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        phone:"123456"
      },
      {
        key: '299',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        phone:"234567"
      },{
        key: '199',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        phone:"123456"
      },
      {
        key: '211',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        phone:"234567"
      },{
        key: '11',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        phone:"123456"
      },
      {
        key: '20',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        phone:"234567"
      }
      ],
      page_total: 0, // 总页数
      page_current: 1, // 当前页数
      pageSize:10, // 每页显示数量
      //pending:true // 数据加载时，显示loading
    }
  }

  componentDidMount (){
  // this.getData(); // 初次进入，读取数据
  }
  // 读取表格数据
  getData = async(value) =>{

    // await fetch('http://XXXXXX/List',{
    //   method:"get",
    //   query:{"pageNum":this.state.page_current, "pageSize": this.state.pageSize,"value":value}, 
    //   headers:{"Authorization": this.props.token},
    // }).then(res=>res.json()).then(data=>{
    //   if(data.code==0){
    //     this.state.page_total = data.result.total;
    //     if(this.state.page_current==1){
    //       this.setState({
    //         dataSource :data.result.items,
    //         pending:false
    //       })
    //     }else {
    //       this.setState({
    //         dataSource :[...this.state.dataSource,...data.result.items],
    //         pending:false
    //       })
    //     }
    //   }else {
    //     console.log('读取数据失败');
    //   }
    // }).catch(e=>console.log('eeeee',e));
  }
  
  //表格页数改变时
  handlePageChange(page) {
    this.setState({
      page_current: page.current,
      pending:true
    }, () => {
      this.getData()
    })
  }
  // 搜索时
  search(value){
    this.setState({
      page_current: 1,
      pending:true
    }, () => {
      this.getData(value)
    })
  }
  render() {
    const { page_total, page_current,pending } = this.state
    const {Search} = Input;
    const columns = [
      {
        title:"名字",
        dataIndex:"name",
      },{
          title:"年龄",
          dataIndex:"age",
      },{
          title:"地址",
          dataIndex:"address",
      },{
          title:"电话",
          dataIndex:"phone",
      },
    ];
  return(
    <div>
      <div style={{width:"600px",float:"right",marginBottom:"20px"}}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => this.search(value)}
        />
      </div>
      <Table
        columns={columns}
        loading= {pending}
        onChange={page=>this.handlePageChange(page)}
        dataSource={this.state.dataSource}
        bordered
        size="small"
        pagination={{
          showQuickJumper:true,
          current: page_current,
          total: page_total,
          pageSize: 5,
        }} 
      />
    </div>
  )}}

  export default InformationList
