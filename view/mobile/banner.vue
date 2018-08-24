<template>
  <div>
        <Row>
            <Card>
                <p slot="title" style="height: 32px">
                    <Button type="primary" @click="alertAdd" icon="plus-round">添加</Button>
                </p>
                <div>
                    <Table :columns="columnsList" :data="tableData" border disabled-hover></Table>
                </div>
                <div class="margin-top-15" style="text-align: center">
                    <Page :total="tableShow.count" :current="tableShow.page" :page-size="tableShow.size" @on-change="changePage" @on-page-size-change="changeSize" show-elevator show-sizer show-total></Page>
                </div>
            </Card>
        </Row>
        <Modal v-model="imgs.show" :style="{ top: '5px' }" :onOk="submit">
            <Upload
                action = "https://api.fanzu.vip/api/v1/upload?type=1"
                :show-upload-list = "false"
                type ="drag"
                :format = "['jpg','jpeg','png']"
                :on-progress = "progress"
                :on-success = "success">
                <template v-if="this.formItem.imgs !== ''">
                    <img :src="this.formItem.imgs" style="width:100%">
                </template>
                <template v-else>
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        
                        <Icon type="camera" size="20"></Icon>
                    </div>
                </template>
            </Upload>
            <Select v-model="this.formItem.position" style="width:100%;margin-top:15px">
                <Option  :value="1" :key="1">首页轮播图</Option>
            </Select>
            <div slot="footer">
                <Button type="text" @click="cancel" style="margin-right: 8px">取消</Button>
                <Button type="primary" @click="submit" :loading="modalSetting.loading">确定</Button>
            </div>
        </Modal>
  </div>
</template>
<script>
const resourse = "picture";
const deleteButton = (vm, h, currentRow, index) => {
  return h(
    "Poptip",
    {
      props: {
        confirm: true,

        title: "您确定要删除这条轮播吗? ",

        transfer: true
      },

      on: {
        "on-ok": () => {
          axios.delete(resourse + "/" + currentRow.id).then(function(response) {
            currentRow.loading = false;

            if (response.data.code === 200) {
              vm.tableData.splice(index, 1);

              vm.$Message.success(response.data.msg);
            } else {
              if (response.data.code === 403) {
                vm.$store.commit("logout", this);

                vm.$router.push({
                  name: "login"
                });
              } else {
                vm.$Message.error(response.data.msg);
              }
            }
          });
        }
      }
    },
    [
      h(
        "Button",
        {
          style: {
            margin: "0 5px"
          },

          props: {
            type: "error",

            placement: "top",

            loading: currentRow.isDeleting
          }
        },

        "删除"
      )
    ]
  );
};

import axios from "axios";
export default {
  data() {
    return {
      columnsList: [
        {
          title: "序号",
          type: "index",
          align: "center"
        },
        {
          title: "图片位置",
          key: "position",
          align: "center"
        },
        {
          title: "图片",
          align: "center",
          render: (h, params) => {
            return h("img", {
              attrs: {
                src:params.row.url
              },
              style: {
                margin: "0 5px",
                height: "100px"
              }
            });
          }
        },
        {
          title: "状态",
          align: "center",
          render: (h, params) => {
            return h("i-switch", {
              props: {
                "true-value": 1,
                "false-value": 0,
                value:params.row.status
              },
              on:{
                "on-change":(status)=>{
                  axios.patch(resourse+'/'+params.row.id+'/'+status).then(response=>{
                    let res = response.data;
                        if (res.code === 200) {
                          this.$Message.success(res.msg);
                        } else {
                          if (res.code === 403) {
                            this.$store.commit("logout", this);
                            this.$router.push({
                              name: "login"
                            });
                          } else {
                            this.$Message.error(res.msg);
                            this.getList();
                          }
                        }
                  })
                }
              }
            });
          }
        },
        {
          title: "操作",

          align: "center",

          key: "handle",

          width: 220,

          handle: ["delete"]
        }
      ],
      tableData: [],
      tableShow: {
        count: 0,
        page: 1,
        size: 10
      },
      created: 0.0,
      imgs: {
        show: false
      },
      formItem: {
        imgs: "",
        position: 1
      },
      modalSetting: false
    };
  },
  created() {
    //   console.log(this)
    this.getList();
    this.columnsList.forEach(item => {
        if (item.key === "handle") {
          item.render = (h, params) => {
            return h("div", [
              deleteButton(this, h, this.tableData[params.index], params.index)
            ]);
          };
        }
      });
  },
  methods: {
    alertAdd() {
      this.imgs.show = true;
    },
    changePage(page) {
      this.tableShow.page = page;
      this.getList();
    },
    changeSize(size) {
      this.tableShow.size = size;
      this.getList();
    },
    getList() {
      axios.get(resourse).then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.tableData = res.data.list;
          this.tableShow.count = res.data.count;
        } else {
          if (res.code === 403) {
            this.$store.commit("logout", this);
            this.$router.push({
              name: "login"
            });
          } else {
            this.$Message.error(res.msg);
          }
        }
      });
    },
    cancel() {},
    progress(event, file, fileList) {
      //   console.log(event);
      //   console.log(file);
      //   console.log(fileList);
    },
    success(res, file) {
      //   console.log(res);
      //   console.log(file);
      if (res.code === 200) {
        this.formItem.imgs = res.data.url;
      }
    },
    submit() {
      axios.post("picture", this.formItem).then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.imgs.show = false;
          this.formItem.imgs = "";
          // this.formItem.position = 0
        }
      });
    }
  }
};
</script>

