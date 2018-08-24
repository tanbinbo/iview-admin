<template>
    <div>
        <Row>
            <Card>
                <div class="ivu-table-box">
                    <Table :columns="columnsList" :data="dataList"></Table>
                </div>
                <Page class-name="page-name" :total="100" show-sizer show-elevator />
            </Card>
        </Row>
    </div>
</template>

<script>
 export default {
    name: 'full_order',
    data () {
        return {
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
            dataList: [
                {   
                    number: '201808221010843',
                    amount: '24.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492712'
                },
                {   
                    number: '201808221010843',
                    amount: '25.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492700'
                },
                {   
                    number: '201808221010843',
                    amount: '26.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492000'
                }
            ]
        }
    },
    methods: {
    },
    components: {

    }
 }
</script>
