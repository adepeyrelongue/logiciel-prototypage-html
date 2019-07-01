<template>
  <div v-if="cssProto.length > 0" class="col-xs-12 col-md-4">
    <button
      type="button"
      class="btn btn-default"
      data-toggle="modal"
      data-target="#ib-modal-classes"
    >Styles applicatifs</button>
    <div
      class="modal"
      role="dialog"
      aria-labelledby="ib-modal-classes-label"
      id="ib-modal-classes"
      tabindex="-1"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="ib-modal-classes-label">Styles applicatifs</h4>
          </div>
          <div class="modal-body">
            <ul class="list-unstyled">
              <li v-for="classeProto in cssProto" :key="classeProto">
                <div class="form-group">
                  <div class="col-xs-12">
                    <div class="checkbox">
                      <label :for="'ib-classe-'+classeProto">
                        <input
                          :id="'ib-classe-'+classeProto"
                          type="checkbox"
                          :name="'ib-classe-'+classeProto"
                          v-model="styles_[classeProto]"
                        >
                        {{classeProto}}
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-xs-6 col-xs-offset-3">
                <div class="btn-group btn-group-justified">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classes-app",
  props: {
    classesApp: Array
  },
  data: function() {
    let styles = {};

    for (const style of this.$store.state.cssProto) {
      styles[style] = false;
    }

    let classesApp_ = this.classesApp || [];
    for (const style of classesApp_) {
      styles[style] = true;
    }
    return {
      styles_: styles
    };
  },
  computed: {
    cssProto: function() {
      return this.$store.state.cssProto;
    }
  },
  created: function() {
    $("#ib-modal-classes").modal("hide");
  },
  watch: {
    styles_: {
      deep: true,
      handler: function(styles) {
        let classesApp_ = [];

        for (const style of Object.keys(styles)) {
          if (styles[style]) {
            classesApp_.push(style);
          }
        }

        this.maj("classesApp", classesApp_, classesApp_.length > 0);
      }
    }
  }
};
</script>