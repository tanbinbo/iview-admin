<template>
    <div>
        <Row>
            <Card>
                <div class="ivu-search-box margin-bottom-10">
                    <Button @click="deleteAll(true)">删除</Button>
                    <Button @click="handleSelectAll()">全选</Button>
                    <Input 
                        v-model="searchContent" 
                        icon="search" 
                        @on-change="handleSearch" 
                        placeholder="搜索" 
                        style="float:right;width: 200px;"
                    />
                </div>
                <Table ref="selection" :columns="columnsList" :data="dataList"></Table>
                <Page class-name="page-name" :total="100" show-elevator />
            </Card>
        </Row>
    </div>
</template>

<script>
 export default {
    name: 'full_order',
    data () {
        return {
            searchContent:'',
            columnsList: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '编号',
                    key: 'number',
                    align: 'center'
                },
                {
                    title: '配送方式',
                    key: 'shippingMethod',
                    align: 'center',
                    sortable: true
                },
                {
                    title: '物流公司',
                    key: 'deliveryCorp',
                    align: 'center'
                },
                {
                    title: '运单号',
                    key: 'trackingNo',
                    align: 'center'
                },
                {
                    title: '发货人',
                    key: 'shipper',
                    align: 'center'
                },
                {
                    title: '	创建日期',
                    key: 'createdDate',
                    align: 'center',
                    sortable: true
                },
                {
                    title: '操作',
                    key: 'active',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params,params.index) 
                                    }
                                }
                            }, '文字'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            dataList: [
                {   
                    number: '1',
                    shippingMethod: '货到付款',
                    deliveryCorp: '顺丰',
                    trackingNo: '13245679',
                    shipper: '某某',
                    createdDate: '1534925492712'
                },
                {
                    number: '2',
                    shippingMethod: '货到付款',
                    deliveryCorp: '顺丰',
                    trackingNo: '13245679',
                    shipper: '某某',
                    createdDate: '1534925492712'
                },
                {   
                    number: '3',
                    shippingMethod: '货到付款',
                    deliveryCorp: '顺丰',
                    trackingNo: '13245679',
                    shipper: '某某',
                    createdDate: '1534925492712'
                }
            ]
        }
    },
    methods: {
        show (params,index) {
            console.log(params,index)
            this.$Modal.info({
                title: 'User Info',
                content: `number${this.dataList[index].number}<br>Age：${this.dataList[index].shipper}`
            })
        },
        remove (index){
            this.dataList.splice(index, 1);
        },
        handleSearch () {
        },
        deleteAll (status){
            // state = !state;
            this.$refs.selection.selectAll(status);
        },
        handleSelectAll () {
            let status = false;
            status = status?true:false;
            this.$refs.selection.selectAll(status);
        }
    },
    components: {

    }
 }
</script>
