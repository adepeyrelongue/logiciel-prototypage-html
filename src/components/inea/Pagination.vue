<template>
  <nav :class="classesComputed" aria-label="Pagination">
    <samp>ib:pagination:debut</samp>
    <ol class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" title="Première page - désactivé">
          <span aria-hidden="true" class="dgfipicon dgfipicon-page-premiere mr-1_2"></span>
        </a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#" title="Page précédente - désactivé">
          <span aria-hidden="true" class="dgfipicon dgfipicon-page-precedente mr-1_2"></span>
        </a>
      </li>
      <li class="page-item active">
        <a class="page-link" href="#" title="Page 1 - active">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" title="Page 2">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" title="Page suivante">
          <span aria-hidden="true" class="dgfipicon dgfipicon-page-suivante mr-1_2"></span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" title="Dernière page">
          <span aria-hidden="true" class="dgfipicon dgfipicon-page-derniere mr-1_2"></span>
        </a>
      </li>
    </ol>
    <samp>ib:pagination:fin</samp>
  </nav>
</template>

<script>
import Espacement from "./mixins/Espacement";
export default {
  name: "pagination",
  mixins: [Espacement],
  computed: {
    classesComputed: function() {
      return [...this.baseClasses, ...this.espacementClasses];
    }
  }
};
</script>