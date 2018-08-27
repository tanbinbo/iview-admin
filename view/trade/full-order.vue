<template>
    <div>
        <Row>
            <Card>
                <Input v-model="value13">
                    <Select v-model="select3" slot="prepend" style="width: 80px">
                        <Option value="day">Day</Option>
                        <Option value="month">Month</Option>
                    </Select>
                    <Button slot="append" icon="ios-search" @click="search"></Button>
                </Input>

                <div class="ivu-table-box">
                    <Table :columns="columnsList" :data="dataList"></Table>
                </div>
                <Page class-name="page-name" :total="100" show-sizer show-elevator />
            </Card>
        </Row>
    </div>
</template>

<script>
import {getOrderList, searchOrderList} from '../../api/data.js'
 export default {
    name: 'full_order',
    data () {
        return {
            value13: '',
            select3: 'day',
            columnsList: [
                {
                    title: '编号',
                    key: 'number',
                    align: 'center'
                },
                {
                    title: '订单金额',
                    key: 'amount',
                    align: 'center',
                    sortable: true
                },
                {
                    title: '会员',
                    key: 'member',
                    align: 'center'
                },
                {
                    title: '店铺',
                    key: 'store',
                    align: 'center'
                },
                {
                    title: '收货人',
                    key: 'consignee',
                    align: 'center'
                },
                {
                    title: '支付方式',
                    key: 'paymentMethodName',
                    align: 'center'
                },
                {
                    title: '配送方式',
                    key: 'shippingMethodName',
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'status',
                    align: 'center'
                },
                {
                    title: '创建日期',
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
                            }, '查看'),
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
                            }, '打印')
                        ]);
                    }
                }
            ],
            dataList: [],
            page: 0
        }
    },
    methods: {
        search(){
            console.log(this.value13)
            searchOrderList({
                type: this.select3,
                value: this.value13
            }).then(res => {
                this.dataList = res;
            })
        }
    },
    components: {

    },
    mounted() {
        getOrderList().then(res => {
            console.log(res)
            this.dataList = res.data
        })
        console.log(123)
    }
 }
</script>
